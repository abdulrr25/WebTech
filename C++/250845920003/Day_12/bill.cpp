#include <iostream>
#include <vector>
#include <string>
#include <fstream>
#include <stdexcept>
#include <algorithm>

using namespace std;

class Item {
public:
    int itemID;
    string itemName;
    double price;
    int stockQuantity;

    Item(int id, string name, double p, int qty) {
        if (p < 0) throw invalid_argument("Price cannot be negative");
        if (qty < 0) throw invalid_argument("Quantity cannot be negative");
        itemID = id;
        itemName = name;
        price = p;
        stockQuantity = qty;
    }
};

class Bill {
public:
    int billID;
    string customerName;
    vector<pair<Item, int>> items;  // pair of Item and quantity

    Bill(int id, string custName) {
        billID = id;
        customerName = custName;
    }

    // Overload + to add item with quantity
    Bill& operator+(const pair<Item, int>& p) {
        if (p.second > p.first.stockQuantity) 
            throw runtime_error("Not enough stock for item " + p.first.itemName);
        if (p.second <= 0)
            throw invalid_argument("Quantity must be positive");

        items.push_back(p);
        return *this;
    }

    // Overload << to display bill
    friend ostream& operator<<(ostream& os, const Bill& bill) {
        if (bill.items.empty()) throw runtime_error("Bill is empty.");

        os << "Bill ID: " << bill.billID << "\nCustomer: " << bill.customerName << "\nItems:\n";
        os << "ID\tName\tQty\tPrice\tTotal\n";

        double totalBill = 0;
        for (auto& p : bill.items) {
            double total = p.first.price * p.second;
            totalBill += total;
            os << p.first.itemID << "\t" << p.first.itemName << "\t" << p.second << "\t" 
               << p.first.price << "\t" << total << "\n";
        }
        os << "Total Bill: $" << totalBill << "\n";
        return os;
    }

    // Save bill to file
    void saveBill() {
        if (items.empty()) throw runtime_error("Cannot save empty bill");

        ofstream fout("bills.txt", ios::app);
        if (!fout) throw runtime_error("Cannot open bills.txt");

        fout << billID << "|" << customerName << "|";
        for (size_t i = 0; i < items.size(); i++) {
            fout << items[i].first.itemID << "," << items[i].second;
            if (i < items.size() - 1) fout << ";";
        }
        fout << "\n";
        fout.close();
    }
};

int main() {
    // Simple store inventory
    vector<Item> store = {
        Item(1, "Laptop", 999.99, 5),
        Item(2, "Mouse", 25.50, 10),
        Item(3, "Keyboard", 45.00, 7)
    };

    cout << "Enter customer name: ";
    string custName; getline(cin, custName);

    Bill bill(1, custName);

    while (true) {
        cout << "\nAvailable items:\n";
        for (auto& item : store) {
            cout << item.itemID << ". " << item.itemName << " - $" << item.price << " (Stock: " << item.stockQuantity << ")\n";
        }
        cout << "Enter item ID to purchase (0 to finish): ";
        int id; cin >> id;
        if (id == 0) break;

        auto it = find_if(store.begin(), store.end(), [id](Item& i) { return i.itemID == id; });
        if (it == store.end()) {
            cout << "Invalid ID. Try again.\n";
            continue;
        }

        cout << "Enter quantity: ";
        int qty; cin >> qty;

        try {
            if (qty > it->stockQuantity) throw runtime_error("Insufficient stock");

            bill = bill + make_pair(*it, qty);
            it->stockQuantity -= qty;
            cout << "Added to bill.\n";
        }
        catch (exception& e) {
            cout << "Error: " << e.what() << "\n";
        }
    }

    try {
        cout << "\n----- BILL -----\n";
        cout << bill;
        bill.saveBill();
        cout << "Bill saved to bills.txt\n";
    }
    catch (exception& e) {
        cout << "Error: " << e.what() << "\n";
    }

    return 0;
}
