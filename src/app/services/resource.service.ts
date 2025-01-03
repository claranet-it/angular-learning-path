import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

interface IResourceBaseObject {
  id?: string;
}

type ResourceType<T> = T & IResourceBaseObject;

@Injectable({
  providedIn: 'root',
})
export class ResourceService<T> {
  http = inject(HttpClient);
  resources = signal<ResourceType<T>[]>([]);

  protected setResources = (resources: ResourceType<T>[]) => {
    this.resources.set(resources);
  }

  protected upsertResource = (resource: ResourceType<T>) => {
    const index = this.resources().findIndex((item) => item.id === resource.id);
    if (index === -1) {
      this.resources.set([...this.resources(), resource]);
      return;
    }

    const updatedResources = this.resources().map((item) => {
      if (resource.id === item.id) {
        return { ...resource };
      }
      return item;
    });
    this.resources.set(updatedResources);
  };

  protected removeResource = (id: string) => {
    this.resources.set(
      this.resources().filter((resource) => resource.id !== id)
    );
  }
}