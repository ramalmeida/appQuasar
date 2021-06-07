import { City } from 'src/service/models'
import axios, { AxiosInstance } from 'axios'

const baseConfig = { baseURL: 'https://localhost:3000/' }

export class Cities {
    private repository: AxiosInstance;

    constructor ({ httpRepository = axios.create(baseConfig) }) {
      this.repository = httpRepository
    }

    async getAll (): Promise<City[]> {
      const { data } = await this.repository.get<City[]>('cities')
      return data
    }

    async get (id:string): Promise<City> {
      const { data } = await this.repository.get<City>(`cities/${id}`)
      return data
    }

    async create (city: City): Promise<City> {
      const { data } = await this.repository.post<City>('cities', { ...city })
      return data
    }

    async update (id: string, city: City): Promise<City> {
      const { data } = await this.repository.patch<City>(`cities/${id}`, { ...city })
      return data
    }

    async delete (id: string): Promise<Record<string, unknown>> {
      const { data } = await this.repository.delete<Record<string, unknown>>(`cities/${id}`)
      return data
    }
}
