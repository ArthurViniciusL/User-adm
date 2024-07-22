'use client'

import { Header } from "@/app/components/Header";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Routes from "./app.routing";

import { SearchBar } from "@/app/components/SearchBar";
import { Table } from "./components/Table";
export default function List() {
  
  const router = useRouter();

  return (
    <main>
      <Header title="Users" >
        <button className='app-btn' onClick={() => router.push(Routes.userRegistration)}>
          <Plus />
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