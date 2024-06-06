
import '@fullcalendar/core/vdom'
import '@fullcalendar/react/dist/vdom'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'
import React, { useState } from 'react'
import { tokens } from '../../components/components/Theme';
import Header from '../../components/components/Header';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState(
    [
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]
  );

  // Handle Date Click Function
  const handleDateClick = ({ selected }) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  }

  // Handle Event click Function
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="View your all daily plans" />
      
      {/* CALENDAR SIDEBAR */}
      <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
      >
        <Typography variant='h5'>
          Events
        </Typography>
        <List>
          {currentEvents.map((event) => {
            <ListItem
              key={event.id}
              sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                       year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                  </Typography>
                }
              >
                
                </ListItemText>
            </ListItem>
          })}
        </List>
        </Box>

      {/* Calendar  Modules*/}

      <Box flex="1 1 100%" ml="15px" mt="3px">
        <FullCalendar
           height="70vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          
        />
      </Box>
    </Box>

  )
}

