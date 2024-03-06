import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"

const faqsList = [
    {
        q: "What is a task manager for organizations?",
        a: "A task manager for organizations is a software application designed to help businesses and teams efficiently manage tasks, projects, and workflows. It allows for better organization, collaboration, and tracking of tasks across multiple projects and team members.",
    },
    {
        q: "What are the benefits of using a task manager for organizations?",
        a: "Using a task manager for organizations can lead to improved productivity, better project management, enhanced collaboration among team members, clearer communication, and more efficient allocation of resources.",
    },
    {
        q: "How do I get started with a task manager for organizations?",
        a: "To get started with a task manager for organizations, you typically need to sign up for an account with the provider, set up your organization's workspace, invite team members, and start creating and assigning tasks.",
    },
    {
        q: "How does an AI-powered task manager for organizations work?",
        a: "An AI-powered task manager for organizations utilizes artificial intelligence and machine learning algorithms to automate repetitive tasks, provide intelligent task recommendations, analyze data to identify patterns and trends, and optimize workflows for better efficiency and productivity.",
    },
    {
        q: "What are the benefits of using an AI-powered task manager for organizations?",
        a: "AI-powered task managers for organizations can help streamline workflows, improve task prioritization, reduce manual effort, provide valuable insights through data analysis, and ultimately enhance overall productivity and performance.",
    },
    {
        q: "Can I use a task manager for individual productivity?",
        a: "Absolutely! Many task managers designed for organizations also offer features suitable for individual users. Whether you're a solo entrepreneur, freelancer, or simply want to stay organized personally, a task manager can help you manage your tasks and stay on top of your commitments effectively.",
    }
]


const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs