
const Routes = {
  list: '/',
  userCreate: '/pages/users/create',
  userEdit: (id: number) => `pages/users/edit/${id}`
}

export default Routes;