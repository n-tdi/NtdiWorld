<script>
    import Header from '../../../components/Header.svelte';
    import ProjectView from '../../../components/project/ProjectView.svelte';
    export let data;
    const { project } = data;

    const title = project.title;
    const description = project.description;
    const sections = project.sections;
    const features = project.features;
</script>

<Header --ml="32.9%"></Header>
<div class="container">
    <ProjectView title={title} description={description} sections={sections} features={features} />
</div>

<style>
    .container {
        width: 59%;
        margin: 0 auto;
    }

    @media screen and (max-width: 1200px) {
      .container {
        width: 78% !important;
      }
    }

    @media screen and (max-width: 700px) {
      .container {
        width: 92% !important;
      }
    }
</style>
