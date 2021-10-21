class ChangeTodoName < ActiveRecord::Migration[5.2]
  def change
    rename_table :todos, :todolists
  end
end
