"use client";

import SideMenu from "@/components/admin-dashboard/SideMenu";
import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      router.push("/auth/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-5 md:py-10">
          <div className="lg:col-span-8 2xl:col-span-9 order-1 lg:order-2">
            {children}
          </div>
          <div className="lg:col-span-4 2xl:col-span-3 order-2 lg:order-1 mb-6 lg:mb-0">
            <SideMenu />
          </div>
        </div>
      </div>
    </section>
  );
}
