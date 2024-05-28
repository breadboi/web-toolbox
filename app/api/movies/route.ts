import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
}

interface MovieResponse {
  Response: string;
  Search: MovieData[];
  totalResults: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('searchTerm');
  if (!searchTerm || typeof searchTerm !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing searchTerm' }), { status: 400 });
  }

  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const result = await axios.get<MovieResponse>(`http://www.omdbapi.com/?s=${encodedSearchTerm}&apikey=${process.env.MOVIES_API_KEY}`);

  if (result.data.Response === 'False') {
    return new Response(JSON.stringify({ error: result.data }), { status: 400 });
  }

  return new Response(JSON.stringify(result.data), { status: 200 });
}