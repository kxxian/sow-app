import { useEffect, useState } from "react";
import "../pages/css/Table.css";
import toast from "react-hot-toast";
import api from "../axios/axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const PriceList = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [priceList, setPriceList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [filters, setFilters] = useState({
    articleNumber: null,
    product: null,
    unit: null,
    description: null,
  });

  const onChangeSearch = (e) => {
    if (e.target.value) {
      setSearchParams({ search: e.target.value });
      setSearch(e.target.value);
    } else {
      navigate("/user/price-list");
      setSearch("");
    }
  };

  useEffect(() => {
    const fetchPriceList = async () => {
      try {
        const { data } = await api.get("/api/price-list", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPriceList(data.list);
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
        console.log(`Errro: ${error}`);
      }
    };

    if (!token) {
      toast.dismissAll();
      toast.error("Login expired");
      navigate("/");
    }
    fetchPriceList();
  }, [navigate, token]);

  const searchList = priceList.filter((listing) => {
    if (filters.articleNumber && filters.articleNumber.length > 0) {
      if (!filters.articleNumber.includes(listing.articleNumber)) return false;
    }

    if (filters.product && filters.product.length > 0) {
      if (!filters.product.includes(listing.product)) return false;
    }

    if (filters.description && filters.description.length > 0) {
      if (!filters.description.includes(listing.description)) return false;
    }

    if (filters.unit && filters.unit.length > 0) {
      if (!filters.unit.includes(listing.unit)) return false;
    }

    if (search) {
      const trimed = search.trim();
      if (
        !listing.product.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.articleNumber.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.unit.toLowerCase().includes(trimed.toLowerCase()) &&
        !listing.description.toLowerCase().includes(trimed.toLowerCase())
      )
        return false;
    }

    return true;
  });
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search any Product/Article No..."
          onChange={onChangeSearch}
          value={search}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Article Number</th>
            <th>Product</th>
            <th>In Price</th>
            <th>Price</th>
            <th>Unit</th>
            <th>In Stock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {searchList
            .sort((a, b) => (a.articleNumber ? -1 : b.articleNumber ? 1 : 0))
            .map((list) => (
              <tr key={list.id}>
                <td>{list.articleNumber}</td>
                <td>{list.product}</td>
                <td>{list.inPrice}</td>
                <td>{list.price}</td>
                <td>{list.unit}</td>
                <td>{list.inStock}</td>
                <td>{list.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
