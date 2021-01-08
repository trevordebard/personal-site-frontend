import { Introduction } from 'components/Landing/IntroSection'
import { ProjectsSection } from 'components/Projects/ProjectsSection'
import { GetStaticProps } from 'next'
import axios, { AxiosResponse } from 'axios'
import { IAbout, IProject } from 'types'
import { ExperienceSection } from 'components/Experience/ExperienceSection'
import { Divider } from '@chakra-ui/react'

export default function Home(props) {
  return (
    <div >
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
  const projectsRes: AxiosResponse<IProject[]> = await axios.get(`${process.env.API_URL}/projects`)
  const jobsRes: AxiosResponse<IProject[]> = await axios.get(`${process.env.API_URL}/jobs`)
  const about: AxiosResponse<IAbout[]> = await axios.get(`${process.env.API_URL}/about`)

  let projects = projectsRes.data.sort((a, b) => a.order > b.order ? 1 : -1)
  let jobs = jobsRes.data.sort((a, b) => a.order > b.order ? 1 : -1)
  return {
    props: {
      projects: projects,
      jobs: jobs,
      about: about.data
    },
    revalidate: 1
  }
}
