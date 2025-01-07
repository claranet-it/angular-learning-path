import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ResourceService } from './resource.service';

interface TestResource {
  id?: string;
  name: string;
}

describe('ResourceService', () => {
  let service: ResourceService<TestResource>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourceService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set resources', () => {
    const resources: TestResource[] = [{ id: '1', name: 'Resource 1' }];
    service['setResources'](resources);
    expect(service.resources()).toEqual(resources);
  });

  it('should add a new resource', () => {
    const resource: TestResource = { id: '1', name: 'Resource 1' };
    service['upsertResource'](resource);
    expect(service.resources()).toEqual([resource]);
  });

  it('should update an existing resource', () => {
    const initialResource: TestResource = { id: '1', name: 'Resource 1' };
    service['setResources']([initialResource]);

    const updatedResource: TestResource = { id: '1', name: 'Updated Resource 1' };
    service['upsertResource'](updatedResource);
    expect(service.resources()).toEqual([updatedResource]);
  });

  it('should remove a resource', () => {
    const resource: TestResource = { id: '1', name: 'Resource 1' };
    service['setResources']([resource]);

    service['removeResource']('1');
    expect(service.resources()).toEqual([]);
  });
});