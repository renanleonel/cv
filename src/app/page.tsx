import { CommandMenu } from '@/components/command-menu';
import { ProjectCard } from '@/components/project-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DATA } from '@/lib/data';
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: `${DATA.name} | ${DATA.about}`,
	description: DATA.summary,
};

export default function Page() {
	return (
		<main className='container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16'>
			<section className='mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6'>
				<div className='flex items-center justify-between'>
					<div className='flex-1 space-y-1.5'>
						<h1 className='text-2xl font-bold'>{DATA.name}</h1>
						<p className='max-w-md text-pretty font-mono text-sm text-muted-foreground'>
							{DATA.about}
						</p>
						<div className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
							<p className='inline-flex gap-x-1.5 align-baseline leading-none'>
								<GlobeIcon className='h-3 w-3' />
								{DATA.location}
							</p>
						</div>
						<div className='flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden'>
							{DATA.contact.email ? (
								<Button
									className='h-8 w-8'
									variant='outline'
									size='icon'
									asChild
								>
									<Link
										href={`mailto:${DATA.contact.email}`}
										aria-label='E-mail'
									>
										<MailIcon className='h-4 w-4' />
									</Link>
								</Button>
							) : null}
							{DATA.contact.social.map((social) => (
								<Button
									key={social.name}
									className='h-8 w-8'
									variant='outline'
									size='icon'
									asChild
								>
									<Link
										href={social.url}
										aria-label={social.name}
									>
										<social.icon className='h-4 w-4' />
									</Link>
								</Button>
							))}
						</div>
						<div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex'>
							{DATA.contact.email ? (
								<Link
									href={`mailto:${DATA.contact.email}`}
									aria-label='E-mail'
								>
									<span className='underline'>
										{DATA.contact.email}
									</span>
								</Link>
							) : null}
						</div>
					</div>

					<Avatar className='h-28 w-28'>
						<Suspense
							fallback={
								<AvatarFallback>{DATA.initials}</AvatarFallback>
							}
						>
							<AvatarImage
								width={28}
								height={28}
								alt={DATA.name}
								src={DATA.avatarUrl}
							/>
						</Suspense>
						<AvatarFallback>{DATA.initials}</AvatarFallback>
					</Avatar>
				</div>
				<section className='flex min-h-0 flex-col gap-y-3'>
					<h2 className='text-xl font-bold'>About</h2>
					<p className='text-pretty font-mono text-sm text-muted-foreground'>
						{DATA.summary}
					</p>
				</section>

				<section className='flex min-h-0 flex-col gap-y-3'>
					<h2 className='text-xl font-bold'>Skills</h2>
					<div className='flex flex-wrap gap-1'>
						{DATA.skills.map((skill) => {
							return <Badge key={skill}>{skill}</Badge>;
						})}
					</div>
				</section>

				<section className='flex min-h-0 flex-col gap-y-3'>
					<h2 className='text-xl font-bold'>Work Experience</h2>
					{DATA.work.map((work) => {
						return (
							<Card key={work.company}>
								<CardHeader>
									<div className='flex items-center justify-between gap-x-2 text-base'>
										<h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
											<Link
												className='hover:underline'
												href={work.link}
												aria-label={work.company}
											>
												{work.company}
											</Link>

											<span className='inline-flex gap-x-1'>
												{work.badges.map((badge) => (
													<Badge
														variant='secondary'
														className='align-middle text-xs'
														key={badge}
													>
														{badge}
													</Badge>
												))}
											</span>
										</h3>
										<div className='text-sm tabular-nums text-gray-500'>
											{work.start} - {work.end}
										</div>
									</div>

									<h4 className='font-mono text-sm leading-none'>
										{work.title}
									</h4>
								</CardHeader>
								<CardContent className='mt-2 text-xs'>
									{work.description}
								</CardContent>
							</Card>
						);
					})}
				</section>
				<section className='flex min-h-0 flex-col gap-y-3'>
					<h2 className='text-xl font-bold'>Education</h2>
					{DATA.education.map((education) => {
						return (
							<Card key={education.school}>
								<CardHeader>
									<div className='flex items-center justify-between gap-x-2 text-base'>
										<h3 className='font-semibold leading-none'>
											{education.school}
										</h3>
										<div className='text-sm tabular-nums text-gray-500'>
											{education.start} - {education.end}
										</div>
									</div>
								</CardHeader>
								<CardContent className='mt-2'>
									{education.degree}
								</CardContent>
							</Card>
						);
					})}
				</section>

				<section className='flex min-h-0 flex-col gap-y-3'>
					<h2 className='text-xl font-bold'>Certificates</h2>
					{DATA.certificates.map((certificate) => {
						return (
							<Card key={certificate.name}>
								<CardHeader>
									<div className='flex items-center justify-between gap-x-2 text-base'>
										<h3 className='font-semibold leading-none'>
											{certificate.name}
										</h3>
									</div>
								</CardHeader>
								<CardContent className='mt-2'>
									{certificate.school}
								</CardContent>
							</Card>
						);
					})}
				</section>

				<section className='print-force-new-page flex min-h-0 scroll-mb-16 flex-col gap-y-3'>
					<h2 className='text-xl font-bold'>Projects</h2>
					<div className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
						{DATA.projects.map((project) => {
							return (
								<ProjectCard
									key={project.title}
									title={project.title}
									description={project.description}
									tags={project.techStack}
									link={
										'link' in project
											? project.link.href
											: undefined
									}
								/>
							);
						})}
					</div>
				</section>
			</section>

			<CommandMenu
				links={[
					...DATA.contact.social.map((socialMediaLink) => ({
						url: socialMediaLink.url,
						title: socialMediaLink.name,
					})),
				]}
			/>
		</main>
	);
}
