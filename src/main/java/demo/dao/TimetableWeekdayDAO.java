package demo.dao;

import demo.model.TimetableWeekday;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class TimetableWeekdayDAO {

    @PersistenceContext(name = "jpa-unit")
    EntityManager em;


@Transactional
    public TimetableWeekday createWeakday(Integer userId, Integer weekday, String st,
                                    String et) {

           try {
               TimetableWeekday timetableWeekday = new TimetableWeekday();
               timetableWeekday.setUser_id(userId);
                timetableWeekday.setWeekday(weekday);
               timetableWeekday.setStartTime(st);
                 timetableWeekday.setEndTime(et);

                 em.persist(timetableWeekday);
                 em.flush();
                 em.refresh(timetableWeekday);

                 return timetableWeekday;
             } catch (Exception thr) {
                thr.printStackTrace();
                throw new RuntimeException(thr.getMessage() + "ERROR Date Week");
             }

         }
    @Transactional
    public List<TimetableWeekday> findWeekdayById(Integer id) {
        List<TimetableWeekday> timetable =  new ArrayList<TimetableWeekday>();
        try {
            Query query = em.createNamedQuery("TimetableWeekday.findById", TimetableWeekday.class);
            query.setParameter("user_id", id);
            timetable =  query.getResultList();

            if (timetable != null) {
                return timetable;
            } else {
                return null;
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return  timetable;
    }


}
