import docker


client = docker.from_env()


def get_containers():

    containers = client.containers.list(all=True)

    result = []

    for container in containers:
        result.append({
            "name": container.name,
            "status": container.status,
            "image": container.image.tags
        })

    return result
