import { UserMenu } from './UserMenu';

export const Header: React.FC = () => {
  return (
    <header className="sticky bg-white shadow top-0 z-20 w-full rounded-xl">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
