<script lang="ts">
    import Expertise from '$lib/resume/expertise/index.svelte';
    import { A, Blockquote, Heading, Hr, Li, List, P } from 'flowbite-svelte';
</script>

<main class="p-8">
    <section>
        <P size="3xl" weight="bold">Hello,</P>
        <P size="2xl" weight="semibold" class="mt-4 mb-8 pl-4">
            I'm Tsiorintsoa Andriamihamina and I work as a DevOps consultant for
            <A href="https://www.shodops.io/">Shodops</A>.
        </P>
        <Blockquote border bg class="my-4 p-4">
            <P size="xl" weight="semibold" class="mt-4 mb-8 pl-4">
                My job is to help teams build software with confidence.
                <br />
                As a DevOps consultant and Full Stack developer, I blend engineering
                rigor with a product‑driven mindset to create platforms that are fast,
                reliable, and built for scale.
            </P>
            <P size="xl" weight="semibold" class="mt-4 mb-8 pl-4">
                I specialize in turning complex infrastructures into clean,
                GitOps‑driven systems, and transforming delivery pipelines into
                smooth, predictable workflows. My work sits at the intersection
                of development, operations, and developer experience — where
                great products truly come to life.
            </P>
            <P size="xl" weight="semibold" class="mt-4 mb-8 pl-4">
                I’m driven by clarity, automation, and continuous improvement.
                <br />
                <b>My mission:</b> empower teams to ship better software, faster,
                and with peace of mind.
            </P>
        </Blockquote>
    </section>
    <Hr />
    <section class="space-y-8">
        <Heading tag="h2">My Domains of Expertise</Heading>
        <Expertise
            title="GitOps‑Driven Infrastructure Management"
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
                'Reducing lead time and accelerating time‑to‑market',
                'Implementing Platform Engineering practices to empower development teams',
                'Supporting organizations in building a mature, high‑performance DevOps culture'
            ]}
        />
        <Expertise
            title="Full‑Stack Development"
            image="/images/expertise/full-stack.png"
            items={[
                'Designing and developing modern web applications',
                'Mastering both front‑end and back‑end architectures',
                'Implementing CI/CD practices, automated testing, and clean development workflows',
                'Collaborating with product and design teams to deliver robust, scalable features'
            ]}
        />
    </section>
</main>
