# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Todolist.destroy_all

  todo1 =  Todolist.create!({
        title: "wash car",
        body: "with soap",
        done: false
    })

    todo2 = Todolist.create!({
        title: "wash dog",
        body: "with shampoo",
        done: true
    })

  

end

$.ajax({
  method: 'GET',
  url: '/api/todos',
  data: {
      todolist: {
          title: 'test',
          body: 'test',
          done: false
      }
  },
  dataType: 'JSON'
}).then(
  todos => console.log(todos),
  error => console.log(error)
);