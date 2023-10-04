import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SubCategories = () => {
  const [subCategories, setSubCategories] = useState(null);
  const params = useParams();

  async function getAllSubCategories(cateId) {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${params.id}/subcategories`
    );
    setSubCategories(data?.data);
  }
  useEffect(() => {
    getAllSubCategories();
  }, []);
  return (
    <div className="container py-4">
      <div className="row">
        {subCategories?.map((subCate) => (
          <div className="col" key={subCate._id}>
            <Link to={`/subcategories/${subCate._id}`}>
              <span className="bg-light d-inline-flex p-3 font-sm rounded fw-bold cursor-pointer">
                {subCate.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategories;
