import "../pages/css/Table.css";

const PriceList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laptop</td>
            <td>Electronics</td>
            <td>800</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Bookshelf</td>
            <td>Furniture</td>
            <td>150</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Coffee Maker</td>
            <td>Appliances</td>
            <td>50</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
