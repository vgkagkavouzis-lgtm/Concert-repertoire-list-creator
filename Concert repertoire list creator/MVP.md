# Concert Repertoire Planner — MVP

## Problem
Musicians keep their repertoire in notes or spreadsheets and build
concert programs by hand, without seeing the total duration.

## Target user
A solo musician or small ensemble planning concerts.

## MVP goal
Manage a library of pieces and build one concert program from it.

## Core features (must have)
- [ ] Add a piece: title, composer, duration (min), key/style
- [ ] Edit and delete a piece
- [ ] View the library as a list
- [ ] Create a concert: name, date, venue
- [ ] Add pieces from the library to a concert program
- [ ] Reorder pieces in the program
- [ ] Show the total program duration

## Out of scope (later)
- User accounts / login
- Multiple concerts at once
- Sharing or printing programs
- Backend / database (MVP uses local state only)

## Tech
- React with useState
- No backend; data in memory (maybe localStorage later)

## Screens
1. Library — list + "Add piece" form
2. Concert — program list + total duration

## Done when
I can add 5 pieces, build a program of 3, reorder them,
and see the correct total time.