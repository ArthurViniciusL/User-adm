'use client'
import { Header } from "@/app/components/Header";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { CreateUserContext } from "@/app/context/CreateUserContext";
import Routes from "@/app/app.routing";
import { SearchBar } from "@/app/components/SearchBar";
import { Table } from "@/app/components/Table";

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

        <button className='app-btn' onClick={() => router.push(Routes.userCreate)} >
          <Plus size={20} />
          New User
        </button>

      </Header>

      <section>
        <SearchBar />
        <Table />
      </section>
    </main >
  )
}