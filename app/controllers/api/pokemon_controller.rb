class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    p @pokemons.count
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
