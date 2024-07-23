'use client'

import { Header } from "@/app/components/Header";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Routes from "./app.routing";

import { SearchBar } from "@/app/components/SearchBar";
import { Table } from "./components/Table";
import { useContext, useEffect, useState } from "react";
import { CreateUserContext } from "./context/CreateUserContext";
import DataService from "./utils/DataService";

export default function List() {

  const router = useRouter();

  const { setUsers } = useContext(CreateUserContext);

  useEffect(() => {
    async function getData() {
      const Users = Object.entries(await new DataService().getUsers())
      /*
      * Montando uma matriz de pares chave-valor ([id, dataStorage]), onde id é a chave e userData é
      * o valor associado para ser usado no map do componente de tabela
      */
      const usersList: any = Users.map(([id, dataStorage]) => {
        if (dataStorage) {
          const user = JSON.parse(dataStorage);
          return {
            id: user.id,
            name: user.name,
            company: user.company,
            role: user.role,
            verified: user.verified,
            status: user.status
          };

        } else {
          return null;
        }
      })
      setUsers(usersList);
    };
    getData();

  }, []);  //users


  return (
    <main>
      <Header title="Users" >
        <button className='app-btn' onClick={() => router.push(Routes.userCreate)}>
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