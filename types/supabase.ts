export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _PokemonToPokemonAbility: {
        Row: {
          pokemon_ability_id: string
          pokemonId: string
        }
        Insert: {
          pokemon_ability_id: string
          pokemonId: string
        }
        Update: {
          pokemon_ability_id?: string
          pokemonId?: string
        }
        Relationships: [
          {
            foreignKeyName: "_PokemonToPokemonAbility_pokemon_ability_id_fkey"
            columns: ["pokemon_ability_id"]
            referencedRelation: "PokemonAbility"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_PokemonToPokemonAbility_pokemonId_fkey"
            columns: ["pokemonId"]
            referencedRelation: "Pokemon"
            referencedColumns: ["id"]
          }
        ]
      }
      _PokemonToPokemonEgg: {
        Row: {
          pokemon_egg_id: string
          pokemonId: string
        }
        Insert: {
          pokemon_egg_id: string
          pokemonId: string
        }
        Update: {
          pokemon_egg_id?: string
          pokemonId?: string
        }
        Relationships: [
          {
            foreignKeyName: "_PokemonToPokemonEgg_pokemon_egg_id_fkey"
            columns: ["pokemon_egg_id"]
            referencedRelation: "PokemonEgg"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_PokemonToPokemonEgg_pokemonId_fkey"
            columns: ["pokemonId"]
            referencedRelation: "Pokemon"
            referencedColumns: ["id"]
          }
        ]
      }
      _PokemonToPokemonType: {
        Row: {
          pokemon_id: string
          pokemon_type_id: string
        }
        Insert: {
          pokemon_id: string
          pokemon_type_id: string
        }
        Update: {
          pokemon_id?: string
          pokemon_type_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "_PokemonToPokemonType_pokemon_id_fkey"
            columns: ["pokemon_id"]
            referencedRelation: "Pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_PokemonToPokemonType_pokemon_type_id_fkey"
            columns: ["pokemon_type_id"]
            referencedRelation: "PokemonType"
            referencedColumns: ["id"]
          }
        ]
      }
      _ResistanceWeakness: {
        Row: {
          resistanceId: string
          weaknessId: string
        }
        Insert: {
          resistanceId: string
          weaknessId: string
        }
        Update: {
          resistanceId?: string
          weaknessId?: string
        }
        Relationships: [
          {
            foreignKeyName: "_ResistanceWeakness_resistanceId_fkey"
            columns: ["resistanceId"]
            referencedRelation: "PokemonType"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_ResistanceWeakness_weaknessId_fkey"
            columns: ["weaknessId"]
            referencedRelation: "PokemonType"
            referencedColumns: ["id"]
          }
        ]
      }
      Avatar: {
        Row: {
          avatar: string | null
          id: string
        }
        Insert: {
          avatar?: string | null
          id?: string
        }
        Update: {
          avatar?: string | null
          id?: string
        }
        Relationships: []
      }
      CaughtPokemon: {
        Row: {
          attack: number | null
          defense: number | null
          hp: number | null
          id: string
          level: number | null
          pokemon_id: string | null
          special_attack: number | null
          special_defense: number | null
          speed: number | null
          trainer_id: string | null
          xp: number | null
        }
        Insert: {
          attack?: number | null
          defense?: number | null
          hp?: number | null
          id?: string
          level?: number | null
          pokemon_id?: string | null
          special_attack?: number | null
          special_defense?: number | null
          speed?: number | null
          trainer_id?: string | null
          xp?: number | null
        }
        Update: {
          attack?: number | null
          defense?: number | null
          hp?: number | null
          id?: string
          level?: number | null
          pokemon_id?: string | null
          special_attack?: number | null
          special_defense?: number | null
          speed?: number | null
          trainer_id?: string | null
          xp?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "CaughtPokemon_pokemon_id_fkey"
            columns: ["pokemon_id"]
            referencedRelation: "Pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CaughtPokemon_trainer_id_fkey"
            columns: ["trainer_id"]
            referencedRelation: "Trainer"
            referencedColumns: ["id"]
          }
        ]
      }
      Pokemon: {
        Row: {
          attack: number | null
          defense: number | null
          description: string | null
          evolution_first_id: string | null
          evolution_second_id: string | null
          generation_id: string | null
          height: string | null
          hp: number | null
          id: string
          level: number | null
          name: string | null
          special_attack: number | null
          special_defense: number | null
          species_id: string | null
          speed: number | null
          sprite: string | null
          thumbnail: string | null
          weight: string | null
          xp: number | null
        }
        Insert: {
          attack?: number | null
          defense?: number | null
          description?: string | null
          evolution_first_id?: string | null
          evolution_second_id?: string | null
          generation_id?: string | null
          height?: string | null
          hp?: number | null
          id?: string
          level?: number | null
          name?: string | null
          special_attack?: number | null
          special_defense?: number | null
          species_id?: string | null
          speed?: number | null
          sprite?: string | null
          thumbnail?: string | null
          weight?: string | null
          xp?: number | null
        }
        Update: {
          attack?: number | null
          defense?: number | null
          description?: string | null
          evolution_first_id?: string | null
          evolution_second_id?: string | null
          generation_id?: string | null
          height?: string | null
          hp?: number | null
          id?: string
          level?: number | null
          name?: string | null
          special_attack?: number | null
          special_defense?: number | null
          species_id?: string | null
          speed?: number | null
          sprite?: string | null
          thumbnail?: string | null
          weight?: string | null
          xp?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Pokemon_evolution_first_id_fkey"
            columns: ["evolution_first_id"]
            referencedRelation: "Pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Pokemon_evolution_second_id_fkey"
            columns: ["evolution_second_id"]
            referencedRelation: "Pokemon"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Pokemon_generation_id_fkey"
            columns: ["generation_id"]
            referencedRelation: "PokemonGeneration"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Pokemon_species_id_fkey"
            columns: ["species_id"]
            referencedRelation: "PokemonSpecies"
            referencedColumns: ["id"]
          }
        ]
      }
      PokemonAbility: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      PokemonEgg: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      PokemonGeneration: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      PokemonSpecies: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      PokemonType: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      PokemonTypeInterations: {
        Row: {
          " attacking_type_id": string
          defending_type_id: string | null
          id: number
          interaction_type: string | null
        }
        Insert: {
          " attacking_type_id": string
          defending_type_id?: string | null
          id?: number
          interaction_type?: string | null
        }
        Update: {
          " attacking_type_id"?: string
          defending_type_id?: string | null
          id?: number
          interaction_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "PokemonTypeInterations_ attacking_type_id_fkey"
            columns: [" attacking_type_id"]
            referencedRelation: "PokemonType"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "PokemonTypeInterations_defending_type_id_fkey"
            columns: ["defending_type_id"]
            referencedRelation: "PokemonType"
            referencedColumns: ["id"]
          }
        ]
      }
      Trainer: {
        Row: {
          avatar_id: string | null
          id: string
          name: string | null
          user_id: string | null
        }
        Insert: {
          avatar_id?: string | null
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Update: {
          avatar_id?: string | null
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Trainer_avatar_id_fkey"
            columns: ["avatar_id"]
            referencedRelation: "Avatar"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
