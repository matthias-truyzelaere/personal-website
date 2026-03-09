import FadeIn from '@/components/animations/FadeIn'

export default function Education() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h2 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Education</h2>
				<ul className={'flex flex-col gap-8'}>
					<li className={'list-none'}>
						<article className={'flex flex-col gap-2'}>
							<div>
								<h3 className={'font-medium'}>Bachelor&apos;s Degree in Artificial Intelligence</h3>
								<p className={'text-secondary font-mono text-xs tracking-wider uppercase'}>
									Karel de Grote Hogeschool • <time dateTime={'2022'}>2022</time> - <time dateTime={'2026'}>2026</time>
								</p>
							</div>
							<p className={'text-secondary'}>Building on a strong foundation in Applied Computer Science and languages like Java, SQL, and C#, I gained valuable experience delivering collaborative projects for real-world clients. I chose to major in Artificial Intelligence to merge these software engineering skills with my passion for developing innovative, data-driven solutions.</p>
						</article>
					</li>
					<li className={'list-none'}>
						<article className={'flex flex-col gap-2'}>
							<div>
								<h3 className={'font-medium'}>Highschool Diploma in IT &amp; Networks</h3>
								<p className={'text-secondary font-mono text-xs tracking-wider uppercase'}>
									Sint-Jozefinstituut • <time dateTime={'2016'}>2016</time> - <time dateTime={'2022'}>2022</time>
								</p>
							</div>
							<p className={'text-secondary'}>My journey into technology began with a diploma in IT &amp; Networks, where I developed a strong foundation in networking and wrote my first programs in C#. During this time, I also gained essential skills in database management with SQL and web development using HTML, CSS, and JavaScript.</p>
						</article>
					</li>
				</ul>
			</section>
		</FadeIn>
	)
}
