import PropTypes from 'prop-types';

const pinShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
});

export default { pinShape };
