import map from 'lodash/map';
export const chatUsersFilter = ({ lists, total }) => {
  return { total, users: lists.map((user) => userFilter(user)) };
};

export const userFilter = data => {
  const { ID: userId, email, channels: channelList = [], profile: { nickname, firstname, lastname, gravatar = '', color, isLocal, status } = {} } = data;
  const channels = channelsFilter(channelList || []);
  return { userId, nickname, firstname, lastname, email, channels: channelsFilter(channels), gravatar, color, status, isLocal, fullname: [firstname, lastname].join(' ') };
};

export const channelsFilter = channels => channels.map(({ name, description, isPrivate, chatBot, ID }) => ({ name, description, isPrivate, ID, channelId: ID, chatBot }));

export const usersFilter = users => map(users, user => userFilter(user));
