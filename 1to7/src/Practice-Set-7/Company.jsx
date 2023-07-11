import React, { useEffect, useState } from "react";
import { companyApi } from "./api";
const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      const companyResponse = await companyApi("https://example.com/api/users");
      setCompanies(companyResponse.data);
      try {
      } catch (error) {
        console.error("Error: ", error.message);
      }
    };
    fetchCompanies();
  }, []);
  const companySelector = (e) => setFilteredCompanies(e.target.value);
  const selectedCompanies = filteredCompanies
    ? companies.filter((company) => company.company === filteredCompanies)
    : companies;
  return (
    <div>
      <h2>Companies</h2>
      <div>
        <span>
          <h3>Filter By Company:</h3>
        </span>
        <select value={filteredCompanies} onChange={companySelector}>
        <option value="">All Companies</option>
          <option value="ABC Inc">ABC Inc</option>
          <option value="ACME Corp">ACME Corp</option>
          <option value="XYZ Corp">XYZ Corp</option>
        </select>
      </div>
      {selectedCompanies.map((company) => {
        return (
          <li>
            <p>Name:{company.name}</p>
            <p>Email:{company.email}</p>
            <p>Website:{company.website}</p>
            <p>Company:{company.company}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Company;
