import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios/axios";

const EditPriceList = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();
  const [priceList, setPriceList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    articleNumber: "",
    product: "",
    inPrice: "",
    price: "",
    unit: "",
    inStock: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (!id) return;

    const fetchPriceList = async () => {
      try {
        const { data } = await api.get(`/api/price-list/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPriceList(data.item);
        setFormData(data.item);
        console.log(data);
      } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPriceList();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirm = window.confirm(
        "Are you sure you want to update this list?",
      );
      if (!confirm) return;

      toast.loading("Saving...");
      const { data } = await api.put("/api/price-list", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dismissAll();
      toast.success(data.message);
      navigate("/user/price-list");
    } catch (error) {
      console.log(`Error: ${error}`);
      toast.dismissAll();
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!priceList) return <p>No data found</p>;
  return (
    <div>
      <h1>Edit Price List</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {priceList && (
          <>
            <InputField
              label="Article Number"
              value={formData.articleNumber}
              onChange={(v) => handleInputChange("articleNumber", v)}
              required={true}
            />

            <InputField
              label="Product"
              value={formData.product}
              onChange={(v) => handleInputChange("product", v)}
              required={true}
            />

            <InputField
              label="In Price"
              value={formData.inPrice}
              onChange={(v) => handleInputChange("inPrice", v)}
            />

            <InputField
              label="Price"
              value={formData.price}
              onChange={(v) => handleInputChange("price", v)}
            />

            <InputField
              label="Unit"
              value={formData.unit}
              onChange={(v) => handleInputChange("unit", v)}
            />

            <InputField
              label="In Stock"
              value={formData.inStock}
              onChange={(v) => handleInputChange("inStock", v)}
            />

            <InputField
              label="Description"
              value={formData.description}
              onChange={(v) => handleInputChange("description", v)}
            />
          </>
        )}
        <div className="pricelist-actions">
          <button
            className="cancel-action"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button className="submit-action" type="submit">
            Update Price List
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div className="pricelist-inputs">
    <label className="pricelist-label">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="pricelist-edit"
      onChange={(e) => onChange(e.target.value)}
      required={required}
    />
  </div>
);

export default EditPriceList;
