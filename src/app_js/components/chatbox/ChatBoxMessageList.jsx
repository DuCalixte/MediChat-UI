import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import map from 'lodash/map';
import compact from 'lodash/compact';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    // minHeight:'100%',
    // position: 'fixed',
    height: '100%',
    // top: 0,
    maxWidth: 'lg',
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    // height: 'auto',
    // verticalAlign: 'top',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    maxWidth: 'sm',
    fontSize: '1.5em'
  },
  listItem: {
    // height: '50px',
    maxWidth: '36ch',
    backgroundColor: '#cf2302',
    margin: '5px 0px 5px 10px'
  },
  inline: {
    display: 'inline',
  },
}));

const ChatBoxMessageList = ({messages}) => {
  // console.log('MESSAGES', map(messages, (data) => data))
  const pick = array => array[Math.floor(array.length * Math.random())];
  const { container, list, listItem, inline } = useStyles();
  // const messagez = [
  //   { fullname: 'Cool Moody', color: '#cdfea0', gravatar: 'https://picsum.photos/64', message: "I'm feeling hungry", messageId: 1, userId: 1 },
  //   { fullname: 'Juan Pablo', color: '#abcd04', gravatar: 'https://picsum.photos/32', message: "I'm cheeling out...", messageId: 2, userId: 2 },
  //   { fullname: 'Cool Moody', color: '#cdfea0', gravatar: 'https://picsum.photos/64', message: "Great, I'll talk to you later", messageId: 3, userId: 1 },
  // ]

  return (
    <>
    <CssBaseline />
    <Container fixed className={container}>
      <List className={list}>
      {map(compact(messages), ({fullname, gravatar, color, message, messageId} = {}) => (
        <ListItem key={messageId} className={listItem} alignItems="flex-start" style={{backgroundColor: 'transparent', marginLeft: pick([12,24,36]) + 'px'}}>
        <ListItemAvatar><Avatar alt={fullname} src={gravatar} /></ListItemAvatar>
        <ListItemText style={{background: color}}
          primary={fullname}
          secondary={<span>{message}</span>}
        />
      </ListItem>
      ))}
      </List>
    </Container>
    </>
  )
};

export default ChatBoxMessageList;


//
// (function(){
//
//   var chat = {
//     messageToSend: '',
//     messageResponses: [
//       'Why did the web developer leave the restaurant? Because of the table layout.',
//       'How do you comfort a JavaScript bug? You console it.',
//       'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
//       'What is the most used language in programming? Profanity.',
//       'What is the object-oriented way to become wealthy? Inheritance.',
//       'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
//     ],
//     init: function() {
//       this.cacheDOM();
//       this.bindEvents();
//       this.render();
//     },
//     cacheDOM: function() {
//       this.$chatHistory = $('.chat-history');
//       this.$button = $('button');
//       this.$textarea = $('#message-to-send');
//       this.$chatHistoryList =  this.$chatHistory.find('ul');
//     },
//     bindEvents: function() {
//       this.$button.on('click', this.addMessage.bind(this));
//       this.$textarea.on('keyup', this.addMessageEnter.bind(this));
//     },
//     render: function() {
//       this.scrollToBottom();
//       if (this.messageToSend.trim() !== '') {
//         var template = Handlebars.compile( $("#message-template").html());
//         var context = {
//           messageOutput: this.messageToSend,
//           time: this.getCurrentTime()
//         };
//
//         this.$chatHistoryList.append(template(context));
//         this.scrollToBottom();
//         this.$textarea.val('');
//
//         // responses
//         var templateResponse = Handlebars.compile( $("#message-response-template").html());
//         var contextResponse = {
//           response: this.getRandomItem(this.messageResponses),
//           time: this.getCurrentTime()
//         };
//
//         setTimeout(function() {
//           this.$chatHistoryList.append(templateResponse(contextResponse));
//           this.scrollToBottom();
//         }.bind(this), 1500);
//
//       }
//
//     },
//
//     addMessage: function() {
//       this.messageToSend = this.$textarea.val()
//       this.render();
//     },
//     addMessageEnter: function(event) {
//         // enter was pressed
//         if (event.keyCode === 13) {
//           this.addMessage();
//         }
//     },
//     scrollToBottom: function() {
//        this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
//     },
//     getCurrentTime: function() {
//       return new Date().toLocaleTimeString().
//               replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
//     },
//     getRandomItem: function(arr) {
//       return arr[Math.floor(Math.random()*arr.length)];
//     }
//
//   };
//
//   chat.init();
//
//   var searchFilter = {
//     options: { valueNames: ['name'] },
//     init: function() {
//       var userList = new List('people-list', this.options);
//       var noItems = $('<li id="no-items-found">No items found</li>');
//
//       userList.on('updated', function(list) {
//         if (list.matchingItems.length === 0) {
//           $(list.list).append(noItems);
//         } else {
//           noItems.detach();
//         }
//       });
//     }
//   };
//
//   searchFilter.init();
//
// })();
