import React, { Component } from 'react';

const tablesData = [
    { id: 1, status: 'completed', tableNumber: 1, bookingTime: '2024-05-01 18:00' },
    { id: 2, status: 'canceled', tableNumber: 2, bookingTime: '2024-05-02 19:00' },
    { id: 3, status: 'completed', tableNumber: 3, bookingTime: '2024-05-03 20:00' },
    { id: 4, status: 'canceled', tableNumber: 4, bookingTime: '2024-05-03 21:00' }
    // Add more tables here...
];

class BookedTablesReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: tablesData,
            searchInput: ''
        };
    }

    showTables = (status) => {
        const sortedTables = tablesData.filter(table => table.status === status).reverse();
        this.setState({ tables: sortedTables });
    };

    showAllTables = () => {
        this.setState({ tables: [...tablesData].reverse() });
    };

    searchTables = () => {
        const { searchInput } = this.state;
        const filteredTables = tablesData.filter(table =>
            table.tableNumber.toString().includes(searchInput) ||
            table.status.toLowerCase().includes(searchInput) ||
            table.bookingTime.includes(searchInput)
        );
        this.setState({ tables: filteredTables });
    };

    resetSearch = () => {
        this.setState({ searchInput: '' });
        this.showAllTables();
    };

    completeTable = (tableId) => {
        const { tables } = this.state;
        const updatedTables = tables.map(table =>
            table.id === tableId ? { ...table, status: 'completed' } : table
        );
        this.setState({ tables: updatedTables });
    };

    goToAnotherPage = () => {
        // Redirect to another page
        window.location.href = 'urlpattern3';
    };

    render() {
        const { tables, searchInput } = this.state;
        return (
            <div className="container mt-5">
                <h1 className="mb-4">Booked Tables Report</h1>
                <div className="input-group mb-3">
                    <input type="text" value={searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })} className="form-control" placeholder="Search..." />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={this.searchTables}>Search</button>
                        <button className="btn btn-secondary" type="button" onClick={this.resetSearch}>Clear</button>
                    </div>
                </div>
                <div className="btn-group mb-3">
                    <button className="btn btn-success" type="button" onClick={() => this.showTables('completed')}>Completed</button>
                    <button className="btn btn-warning" type="button" onClick={() => this.showTables('canceled')}>Canceled</button>
                    <button className="btn btn-info" type="button" onClick={this.showAllTables}>Show All</button>
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Table Number</th>
                            <th>Booking Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tables.map(table => (
                            <tr key={table.id}>
                                <td>{table.id}</td>
                                <td>{table.status}</td>
                                <td>{table.tableNumber}</td>
                                <td>{table.bookingTime}</td>
                                <td>
                                    {table.status === 'canceled' && (
                                        <button className="btn btn-success btn-sm" onClick={() => this.completeTable(table.id)}>Complete</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.goToAnotherPage}>Go to Orders Report</button>
            </div>
        );
    }
}

export default BookedTablesReport;
