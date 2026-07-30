<script lang="ts">
    import Heading from '$lib/atoms/heading/index.svelte';
    import Link from '$lib/atoms/link/index.svelte';
    import Quote from '$lib/atoms/quote/index.svelte';
    import Text from '$lib/atoms/text/index.svelte';
    import Expertise from '$lib/resume/expertise/index.svelte';
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
        <p class="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Hello,
        </p>
        <Text size="xl">
            I'm Tsiorintsoa Andriamihamina and I work as a DevOps consultant for
            <Link href="https://www.shodops.io/">Shodops</Link>.
        </Text>
        <Quote>
            <Text size="lg">
                My job is to help teams build software with confidence.
                <br />
                As a DevOps consultant and Full Stack developer, I blend engineering
                rigor with a product-driven mindset to create platforms that are fast,
                reliable, and built for scale.
            </Text>
            <Text size="lg">
                I specialize in turning complex infrastructures into clean,
                GitOps-driven systems, and transforming delivery pipelines into
                smooth, predictable workflows. My work sits at the intersection
                of development, operations, and developer experience — where
                great products truly come to life.
            </Text>
            <Text size="lg">
                I’m driven by clarity, automation, and continuous improvement.
                <br />
                <b class="font-semibold text-gray-900 dark:text-white"
                    >My mission:</b
                >
                empower teams to ship better software, faster, and with peace of mind.
            </Text>
        </Quote>
    </section>

    <section class="space-y-8">
        <Heading level={2}>My Domains of Expertise</Heading>
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
