import React from "react";
import { Contract } from "../types/contract";

type props = {
  contract: Contract;
};

export const DetailContract: React.FC<props> = ({ contract }) => {
  const {
    title,
    product,
    username,
    description,
    start_date,
    end_date,
  } = contract;

  return (
    <div className="p-4">
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              Judul Kontrak
            </td>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              {title}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              Tanggal Kontrak
            </td>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              {start_date}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              Tanggal Selesai
            </td>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              {end_date}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              Nama Customer
            </td>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              {username}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              Nama Produk
            </td>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              {product && product.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              Deskripsi
            </td>
            <td style={{ border: "1px solid gray", padding: "8px" }}>
              {description}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
