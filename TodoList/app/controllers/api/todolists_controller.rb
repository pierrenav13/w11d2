
class Api::TodolistsController < ApplicationController

    def index
        render json: Todolist.all
    end

    def show
        render json: Todolist.find(params[:id])
    end

    def create
        @todo = Todolist.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end


    def update
        @todo = Todolist.find_by(id: params[:id])
        if @todo.update(todo_params)
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end 
    end

    def destroy
        @todo = Todolist.find_by(id: params[:id])
        @todo.destroy

        render json: Todolist.all
        # render :index
    end

    def todo_params
        params.require(:todolist).permit(:title, :body, :done)
    end

end