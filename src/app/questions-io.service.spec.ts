import { TestBed } from '@angular/core/testing';

import { QuestionsIOService } from './questions-io.service';

describe('QuestionsIOService', () => {
  let service: QuestionsIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
