class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:attack, :defense, :image_url, :name, :poke_type)
  end
end
