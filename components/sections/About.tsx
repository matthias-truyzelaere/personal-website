import FadeIn from '@/components/animations/FadeIn'

export default function About() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-4 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h3 className={'font-mono text-sm font-medium tracking-wider uppercase'}>About</h3>
				<p className={'text-secondary'}>
					From an early age, I knew that I wanted to do something with computers when I grew up. Once I learned how to program in high school, I was completely hooked. I remember staying up until 3 a.m. for a whole week during the Christmas holidays to continue working on my own project. So, in my first year at KdG, I decided to combine this with my other dream: entrepreneurship. For almost 2 years I have been a student-entrepreneur where I gained valuable lessons and skills that
					shaped me who I am today.
				</p>
			</section>
		</FadeIn>
	)
}
