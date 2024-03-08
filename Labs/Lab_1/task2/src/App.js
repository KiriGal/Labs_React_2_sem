const stocks = [
  {
    stock_name: "EFX",
    company_name: "Equifax Inc",
    price: 163.55,
    currency: "USD",
    change: "+9.03"
  },
  {
    stock_name: "IRM",
    company_name: "Iron Mountain Inc",
    price: 33.21,
    currency: "USD",
    change: "+1.42"
  },
  {
    stock_name: "NTAP",
    company_name: "NetApp Inc",
    price: 54.81,
    currency: "USD",
    change: "-6.01"
  },
  {
    stock_name: "CTL",
    company_name: "Centurylink Inc",
    price: 13.79,
    currency: "USD",
    change: "-1.37"
  }
];
function App() {
  return (
      <div className="App">
        <table>
          <thead>
          <tr>
            <th>Stock Name</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
          </thead>
          <tbody>
          {stocks.map((stock, index) => (
              <tr key={index}>
                <td>{stock.stock_name}</td>
                <td>{stock.company_name}</td>
                <td>{stock.price}</td>
                <td style={{color: stock.change.startsWith("-") ? "red" : "green"}}>
                  {stock.change}
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default App;
