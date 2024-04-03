import { Loader } from '@mantine/core';
import { IconCirclesRelation, IconClipboardText, IconShoppingCart, IconUserCheck } from '@tabler/icons-react';
import { useDashboard } from '../api/getDashboard';
import { Link } from 'react-router-dom';


export const Dashboard: React.FC = () => {
  const  {data}  = useDashboard();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">Selamat Datang</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to={"/admin/user"} className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-red-100 text-red-600 inline-block">
            <IconUserCheck size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah User</h2>
          <div className="mt-1">
            {data?.user_count !== undefined ? (
              <>
                <span className="font-bold text-4xl">{data.user_count}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
              <Loader type="dots" />
            )}
          </div>
        </Link>
        <Link to={"/admin/product"} className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600 inline-block">
              <IconShoppingCart size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Product</h2>
          <div className="mt-1">
            {data?.product_count !== undefined ? (
              <>
                <span className="font-bold text-4xl">{data?.product_count}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
                <Loader type="dots" />
            )}
          </div>
        </Link>
        <Link to={"/admin/contract"} className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-teal-100 text-teal-600 inline-block">
                <IconCirclesRelation size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Contract</h2>
          <div className="mt-1">
            {data?.contract_count !== undefined ? (
              <>
                <span className="font-bold text-4xl">{data?.contract_count}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
              <Loader type="dots" />
            )}
          </div>
        </Link>
        <Link to={"/admin/portofolio"} className="bg-white rounded-lg p-5 shadow-lg shadow-gray-200">
          <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600 inline-block">
            <IconClipboardText size={18} />
          </div>
          <h2 className="font-medium text-sm text-gray-600">Jumlah Portofolio</h2>
          <div className="mt-1">
            {data?.history_count !== undefined ? (
              <>
                <span className="font-bold text-4xl">{data?.history_count}</span>
                <span className="text-sm font-medium ml-2 text-gray-600"></span>
              </>
            ) : (
              <Loader type="dots" />
            )}
          </div>
        </Link>
      </div>
    </main>
  );
};
