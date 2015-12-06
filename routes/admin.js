/**
 * Created by Brandi on 12/5/15.
 */
/* GET admin page */
router.get('/admin', function(req, res) {
    res.render('admin', { title: 'Rando Corp Applicants' });
});