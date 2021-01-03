import Head from 'next/head'
import { Introduction } from 'components/IntroSection'
import { ProjectsSection } from 'components/ProjectsSection'
import { GetStaticProps } from 'next'
import axios, { AxiosResponse } from 'axios'
import { IAbout, IProject } from 'types'
import { ExperienceSection } from 'components/ExperienceSection'
import { Divider } from '@chakra-ui/react'

export default function Home(props) {
  return (
    <div >
      <Head>
        <title>Trevor D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <section><Introduction about={props.about} /></section>
        <section><ProjectsSection accent projects={props.projects} /></section>
        <Divider maxW="6xl" mx="auto" />
        <section><ExperienceSection jobs={props.jobs} /></section>
      </main>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects: AxiosResponse<IProject[]> = await axios.get(`${process.env.API_URL}/projects`)
  const jobs: AxiosResponse<IProject[]> = await axios.get(`${process.env.API_URL}/jobs`)
  const about: AxiosResponse<IAbout[]> = await axios.get(`${process.env.API_URL}/about`)

  return {
    props: {
      projects: projects.data,
      jobs: jobs.data,
      about: about.data
    },
    revalidate: 1
  }
}
