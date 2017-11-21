'use strict';

const index = (req, res) => {
    return res.redirect('/ping');
}

module.exports = {
    index,
};
