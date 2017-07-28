import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  const state = {
    comments: ['New Comment', 'Other New comment']
  };

  beforeEach(() => {
    component = renderComponent(CommentList, null, state);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(state.comments.length);
  });

  it('shows each comment that is provided', () => {
    for (let comment of state.comments) {
      expect(component).to.contain(comment);
    }
  });
});