import React from "react";
import { HistoryDatatableType } from "../types/history";


type props = {
  history: HistoryDatatableType;
};

export const PortofolioDetail: React.FC<props> = ({ history}) => {
  const {
    title,
    path_file,
    product_name,
    category_name,
    description,
    start_date,
    end_date,
  } = history;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
        <div className="h-full">
            <img src={`http://127.0.0.1:8000${path_file}`} alt="" className="rounded-lg" />
        </div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <tr>
            <td className="text-sm" style={{ border: "1px solid gray", padding: "8px" }}>
              Judul Portofolio
            </td>
            <td className="text-sm text-slate-600" style={{ border: "1px solid gray", padding: "8px" }}>
              {title}
            </td>
          </tr>
          <tr>
            <td className="text-sm" style={{ border: "1px solid gray", padding: "8px" }}>
              Tanggal Kegiatan
            </td>
            <td className="text-sm text-slate-600" style={{ border: "1px solid gray", padding: "8px" }}>
              {start_date}
            </td>
          </tr>
          <tr>
            <td className="text-sm" style={{ border: "1px solid gray", padding: "8px" }}>
              Tanggal Selesai
            </td>
            <td className="text-sm text-slate-600" style={{ border: "1px solid gray", padding: "8px" }}>
              {end_date}
            </td>
          </tr>
          <tr>
            <td className="text-sm" style={{ border: "1px solid gray", padding: "8px" }}>
              Nama Produk
            </td>
            <td className="text-sm text-slate-600" style={{ border: "1px solid gray", padding: "8px" }}>
              {product_name}
            </td>
          </tr>
          <tr>
            <td className="text-sm" style={{ border: "1px solid gray", padding: "8px" }}>
              Kategori Produk
            </td>
            <td className="text-sm text-slate-600" style={{ border: "1px solid gray", padding: "8px" }}>
              {category_name}
            </td>
          </tr>
          <tr>
            <td className="text-sm" style={{ border: "1px solid gray", padding: "8px" }}>
              Deskripsi
            </td>
            <td className="text-sm text-slate-600" style={{ border: "1px solid gray", padding: "8px" }}>
              {description}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
