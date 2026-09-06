<script lang="ts">
  export let module;
</script>

<a
  href={"/" + module.id}
  class="card"
  style:border-left={"5px solid " + module.color}
>

  <div class="icon">
    {module.icon}
  </div>

  <h3>{module.title}</h3>

  <p>{module.description}</p>

</a>

<style>
.card{
    background:#1e293b;
    color:white;
    padding:20px;
    border-radius:14px;
    text-decoration:none;
    transition:.25s;
}

.card:hover{
    transform:translateY(-3px);
}

.icon{
    font-size:40px;
}
</style>
