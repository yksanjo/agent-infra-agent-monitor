import { describe, it } from 'node:test';
import assert from 'node:assert';
import { AgentMonitor } from '../src/index.js';

describe('AgentMonitor', () => {
  it('should initialize', async () => {
    const instance = new AgentMonitor();
    await instance.initialize();
    assert.ok(instance);
  });

  it('should execute successfully', async () => {
    const instance = new AgentMonitor();
    const result = await instance.execute({ test: 'data' });
    assert.strictEqual(result.success, true);
  });
});
