'use client'

import { Header } from "@/app/components/Header";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Routes from "./app.routing";

import { SearchBar } from "@/app/components/SearchBar";
import { Table } from "./components/Table";
import { useContext, useEffect } from "react";
import { CreateUserContext } from "./context/CreateUserContext";

export default function List() {

  const router = useRouter();

  const { users, getUsers } = useContext(CreateUserContext);

  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <main>
      <Header title="Users" >
        {/* onClick={() => router.push(Routes.userCreate)} */}
        <Link href={Routes.userCreate}>
          <button className='app-btn' >
            <Plus size={20} />
            New User
          </button>
        </Link>
      </Header>

      <section>
        <SearchBar />
        <Table />
      </section>
    </main >
  )
}