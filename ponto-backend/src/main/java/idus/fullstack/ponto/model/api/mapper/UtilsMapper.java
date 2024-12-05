package idus.fullstack.ponto.model.api.mapper;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class UtilsMapper {

    public Time localTimeToTime(LocalTime localTime) {
        return Time.valueOf(localTime);
    }

    public LocalTime timeToLocalTime(Time time) {
        return time.toLocalTime();
    }

    public LocalDate dateToLocalDate(Date date) {
        return date.toLocalDate();
    }

    public Date localDateToDate(LocalDate localDate) {
        return Date.valueOf(localDate);
    }

}