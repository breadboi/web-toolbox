"use client";
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ExTwKP5Fssl
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Confetti from 'react-confetti';
import { CheckIcon } from "lucide-react";
import Image from "next/image";

interface MovieResponse {
  Response: string;
  Search: MovieData[];
  totalResults: string;
}

interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
}

export function MoviePickerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<MovieData[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<MovieData[]>([]);
  const [randomMovie, setRandomMovie] = useState<MovieData | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const searchMovies = async () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const result = await axios.get<MovieResponse>(`/api/movies?searchTerm=${encodedSearchTerm}`);
    setSearchResults(result.data.Search);
  };

  const selectMovie = (movie: MovieData) => {
    setSelectedMovies([...selectedMovies, movie]);
  };

  const removeMovie = (movieToRemove: MovieData) => {
    setSelectedMovies(selectedMovies.filter(movie => movie.Title !== movieToRemove.Title));
  };

  const pickRandomMovie = () => {
    if (selectedMovies.length === 0) {
      alert('No movies selected');
      return;
    }

    const randomIndex = Math.floor(Math.random() * selectedMovies.length);
    const randomMovie = selectedMovies[randomIndex];
    setRandomMovie(randomMovie);
  };

  const toggleConfetti = () => {
    setShowConfetti(!showConfetti);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Input className="flex-1 h-10 md:h-12" placeholder="Search for a movie..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <Button className="rounded-full" size="icon" variant="ghost" onClick={searchMovies}>
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.map((movie) => {
            const isMovieSelected = selectedMovies.some(selectedMovie => selectedMovie.Title === movie.Title);
            return (
              <div key={movie.Title} className="flex flex-col gap-2 group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    alt="Movie Poster"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    height={600}
                    src={movie.Poster}
                    style={{
                      aspectRatio: "400/600",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  {isMovieSelected ? (                    
                    <Button
                      className="absolute top-2 right-2 bg-gray-900/50 text-white hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50 dark:focus-visible:ring-gray-300"
                      size="icon"
                      variant="ghost"
                      onClick={() => removeMovie(movie)}
                    >
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="sr-only">Remove from selected</span>
                    </Button>
                  ) : (
                    <Button
                      className="absolute top-2 right-2 bg-gray-900/50 text-white hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50 dark:focus-visible:ring-gray-300"
                      size="icon"
                      variant="ghost"
                      onClick={() => selectMovie(movie)}
                    >
                      <PlusIcon className="w-5 h-5" />
                      <span className="sr-only">Add to selected</span>
                    </Button>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold line-clamp-2">{movie.Title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{movie.Year}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selectedMovies.length > 0 && (
        <div className="mt-8 md:mt-12 flex flex-col gap-4">
          <div className="bg-gray-100 rounded-lg p-4 md:p-6 dark:bg-gray-800">
            <h2 className="text-xl font-semibold">Selected Movies</h2>
            <div className="mt-4 grid gap-4">
              {selectedMovies.map((movie) => (
                <div className="flex items-center gap-4" key={movie.Title}>
                  <div className="relative aspect-video w-20 overflow-hidden rounded-lg">
                    <Image
                      alt={movie.Title}
                      className="object-cover w-full h-full"
                      height={600}
                      src={movie.Poster}
                      style={{
                        aspectRatio: "400/600",
                        objectFit: "cover",
                      }}
                      width={400}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-2">{movie.Title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{movie.Year}</p>
                  </div>
                  <Button className="rounded-full" size="icon" variant="ghost" onClick={() => removeMovie(movie)}>
                    <XIcon className="w-5 h-5" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {showConfetti && (
            <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            </div>
          )}

          <Dialog onOpenChange={() => toggleConfetti()}>
            <DialogTrigger asChild>
              <div className="flex justify-end">
                <Button variant="outline" onClick={pickRandomMovie}>Pick Random Movie</Button>
              </div>
            </DialogTrigger>
            {randomMovie && (
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{randomMovie.Title}</DialogTitle>
                  <DialogDescription>
                    {randomMovie.Year}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 justify-center">
                  <Image src={randomMovie.Poster} alt={randomMovie.Title} width={300} height={450}/>
                  <p>{randomMovie.Plot}</p>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      )}


    </div>
  )
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}