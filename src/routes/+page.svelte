<script lang="ts">
    import Expertise from '$lib/resume/expertise/index.svelte';
    import { A, Blockquote, Heading, P } from 'flowbite-svelte';
</script>

<svelte:head>
    <title>Tsiorintsoa ANDRIAMIHAMINA - DevOps Consultant</title>
    <meta
        name="description"
        content="DevOps consultant and full-stack engineer specializing in GitOps, Kubernetes platforms, and modern web development. Showcasing expertise in automation, developer experience, and high-quality delivery across cloud-native systems."
    />
    <meta
        name="keywords"
        content="DevOps, GitOps, Kubernetes, Full-Stack Development, CI/CD, Automation, Cloud-Native, Developer Experience, Software Delivery, Infrastructure as Code"
    />
</svelte:head>
<div class="space-y-14">
    <section class="space-y-6">
        <P size="3xl" weight="bold">Hello,</P>
        <P size="xl" weight="medium" class="text-gray-700 dark:text-gray-200">
            I'm Tsiorintsoa Andriamihamina and I work as a DevOps consultant for
            <A
                href="https://www.shodops.io/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-700 dark:text-primary-400 font-semibold"
                >Shodops</A
            >.
        </P>
        <Blockquote
            border
            bg
            italic={false}
            class="border-primary-500 bg-primary-50 dark:bg-primary-900/20 space-y-4 rounded-e-lg p-6 sm:p-8"
        >
            <P
                size="lg"
                weight="normal"
                class="text-gray-700 dark:text-gray-100"
            >
                My job is to help teams build software with confidence.
                <br />
                As a DevOps consultant and Full Stack developer, I blend engineering
                rigor with a product-driven mindset to create platforms that are fast,
                reliable, and built for scale.
            </P>
            <P
                size="lg"
                weight="normal"
                class="text-gray-700 dark:text-gray-100"
            >
                I specialize in turning complex infrastructures into clean,
                GitOps-driven systems, and transforming delivery pipelines into
                smooth, predictable workflows. My work sits at the intersection
                of development, operations, and developer experience — where
                great products truly come to life.
            </P>
            <P
                size="lg"
                weight="normal"
                class="text-gray-700 dark:text-gray-100"
            >
                I’m driven by clarity, automation, and continuous improvement.
                <br />
                <b>My mission:</b> empower teams to ship better software, faster,
                and with peace of mind.
            </P>
        </Blockquote>
    </section>
    <section class="space-y-8">
        <Heading tag="h2" class="text-2xl sm:text-3xl">
            My Domains of Expertise
        </Heading>
        <Expertise
            title="GitOps-Driven Infrastructure Management"
            image="/images/expertise/gitops.png"
            items={[
                'Designing and operating Kubernetes platforms using GitOps principles',
                'Building reproducible, auditable infrastructure standards',
                'Automating provisioning, deployment, and configuration workflows',
                'Strengthening environment reliability, security, and traceability'
            ]}
        />
        <Expertise
            left
            title="Delivery Process Optimization"
            image="/images/expertise/delivery-optimization.png"
            items={[
                'Streamlining and improving CI/CD pipelines',
                'Reducing lead time and accelerating time-to-market',
                'Implementing Platform Engineering practices to empower development teams',
                'Supporting organizations in building a mature, high-performance DevOps culture'
            ]}
        />
        <Expertise
            title="Full-Stack Development"
            image="/images/expertise/full-stack.png"
            items={[
                'Designing and developing modern web applications',
                'Mastering both front-end and back-end architectures',
                'Implementing CI/CD practices, automated testing, and clean development workflows',
                'Collaborating with product and design teams to deliver robust, scalable features'
            ]}
        />
    </section>
</div>
